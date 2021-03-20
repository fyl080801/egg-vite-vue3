import { onErrorCaptured } from 'vue';
import { ErrorLogModule } from '@/store/modules/errorLog';
import { isArray } from '../utils/validate';
import settings from '../settings';

const { errorLog: needErrorLog } = settings;

const checkNeed = () => {
  const env = process.env.NODE_ENV;
  if (isArray(needErrorLog) && env) {
    return needErrorLog.includes(env);
  }
  return false;
};

if (checkNeed()) {
  onErrorCaptured((err, vm, info) => {
    ErrorLogModule.AddErrorLog({
      err,
      vm,
      info,
      url: window.location.href,
    });
  });
}
