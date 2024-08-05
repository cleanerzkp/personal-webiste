import { unstable_flag as flag } from '@vercel/flags/next';

export const showInteractiveTerminal = flag({
  key: 'interactive-terminal',
  decide: () => true,
});

export const precomputeFlags = [showInteractiveTerminal] as const;