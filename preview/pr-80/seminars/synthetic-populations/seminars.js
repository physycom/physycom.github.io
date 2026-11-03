// Progressive enhancement for the Synthetic Populations Seminar Series page.
// The programme itself is rendered at build time from _data/seminars.yaml.
(() => {
  'use strict';
  const talks = JSON.parse(document.getElementById('seminar-data').textContent);
  const now = Date.now();
  const articles = [...document.querySelectorAll('.talk[data-end]')];

  // drop links that only make sense before the seminar; mark the next one
  let next = null;
  articles.forEach(a => {
    const ended = Date.parse(a.dataset.end) <= now;
    a.querySelectorAll('[data-future]').forEach(el => { el.hidden = ended; });
    if (!ended && !next) next = a;
  });
  if (next) next.querySelector('.tag-next').hidden = false;

  // calendar files (confirmed dates only)
  const icalEscape = s => String(s ?? '').replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\;');
  const utc = s => new Date(s).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const fold = line => {
    const out = []; let chunk = '', length = 0;
    for (const ch of line) {
      const bytes = new TextEncoder().encode(ch).length;
      if (length + bytes > 75) { out.push(chunk); chunk = ' '; length = 1; }
      chunk += ch; length += bytes;
    }
    out.push(chunk);
    return out.join('\r\n');
  };
  document.querySelectorAll('.calendar').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      const t = talks.find(t => t.id === button.dataset.talk);
      if (!t || !t.date_confirmed) return;
      const teams = /^https?:\/\//.test(t.teams_url || '') ? t.teams_url : '';
      const description = `${t.speaker} — ${t.affiliation}\nSynthetic Populations Seminar Series\nCity Science Laboratory, University of Bologna\nTime: 16:00 Europe/Rome\n${teams ? 'Teams: ' + teams : 'Check the seminar page for the Teams link.'}`;
      const lines = [
        'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//City Science Laboratory//Synthetic Populations Seminars//EN',
        'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
        `UID:${t.id}@physycom.github.io`, `DTSTAMP:${utc(new Date().toISOString())}`,
        `DTSTART:${utc(t.start)}`, `DTEND:${utc(t.end)}`,
        `SUMMARY:${icalEscape(t.speaker + ': ' + t.title)}`,
        `LOCATION:${icalEscape(t.online_only ? 'Online (Microsoft Teams)' : 'Aula Teorici, first floor, via Irnerio 46, Bologna, Italy')}`,
        `DESCRIPTION:${icalEscape(description)}`, 'STATUS:CONFIRMED', 'END:VEVENT', 'END:VCALENDAR'
      ];
      const blob = new Blob([lines.map(fold).join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = t.id + '.ics';
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  });
})();
