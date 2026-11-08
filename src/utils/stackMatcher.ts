export const normalizeStackName = (name: string): string => {
  if (!name) return '';
  const lower = name.toLowerCase().replace(/[\s\.\-_]/g, '');
  if (lower === 'react' || lower === 'reactjs') return 'react';
  if (lower === 'nestjs' || lower === 'nest') return 'nestjs';
  if (lower === 'nextjs' || lower === 'next') return 'nextjs';
  if (lower === 'oraclecloud' || lower === 'oci') return 'oraclecloud';
  if (lower === 'tanstackquery' || lower === 'tanstack') return 'tanstackquery';
  if (lower === 'nodejs' || lower === 'node') return 'nodejs';
  if (lower === 'styledcomponents') return 'styledcomponents';
  if (lower === 'googleplayconsole' || lower === 'googleplay') return 'googleplayconsole';
  return lower;
};

export const isStackMatched = (stack1: string, stack2: string): boolean => {
  return normalizeStackName(stack1) === normalizeStackName(stack2);
};

