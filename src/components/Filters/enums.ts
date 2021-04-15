export const patterns = {
  string: {
    pattern: '[a-zA-Z]+',
    patternMessage: 'Use only alphabets',
  },
  tags: {
    pattern: '[a-zA-Z;]+',
    patternMessage: 'Use only alphabets',
  },
  number: {
    pattern: '[0-9]',
    patternMessage: 'Use only numbers',
  },
  ips: {
    pattern:
      '\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b',
    patternMessage: 'Use only IP addressess',
  },
  domain: {
    pattern: '^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+$',
    patternMessage: 'Use only domains',
  },
};
