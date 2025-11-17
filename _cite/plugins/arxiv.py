import json
from urllib.request import Request, urlopen
from urllib.parse import quote
from util import *


def main(entry):
    """
    receives single list entry from arxiv data file
    returns list of sources to cite
    """

    # arxiv api endpoint
    endpoint = "http://export.arxiv.org/api/query?search_query=au:$AUTHOR&start=0&max_results=1000"

    # get author from entry
    author = get_safe(entry, "author", "")
    if not author:
        raise Exception('No "author" key')

    # query api
    @log_cache
    @cache.memoize(name=__file__, expire=1 * (60 * 60 * 24))
    def query(author):
        url = endpoint.replace("$AUTHOR", quote(author))
        request = Request(url=url)
        response = urlopen(request).read().decode('utf-8')
        return response

    response = query(author)

    # list of sources to return
    sources = []

    # parse XML response
    import xml.etree.ElementTree as ET
    root = ET.fromstring(response)
    
    # namespace for arxiv
    ns = {'atom': 'http://www.w3.org/2005/Atom',
          'arxiv': 'http://arxiv.org/schemas/atom'}

    # go through response and format sources
    for work in root.findall('atom:entry', ns):
        # extract arxiv id from the id field
        id_element = work.find('atom:id', ns)
        if id_element is not None and id_element.text:
            arxiv_id = id_element.text.split('/abs/')[-1]
            
            # create source with arxiv identifier for Manubot
            source = {"id": f"arxiv:{arxiv_id}"}

            # copy fields from entry to source
            source.update(entry)

            # add source to list
            sources.append(source)

    return sources
