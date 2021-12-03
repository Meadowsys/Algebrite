import { run_test } from '../test-harness';

run_test([
  'exp(-3/4*i*pi)',
  //"exp(-3/4*i*pi)",
  '-1/2*2^(1/2)-1/2*i*2^(1/2)',

  'simplify(exp(-3/4*i*pi))',
  //"exp(-3/4*i*pi)",
  //"-1/2*2^(1/2)-1/2*i*2^(1/2)",
  '-(1+i)/(2^(1/2))',
]);
