import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233333333333333,
  name: '建行生活吃饭',
  version: 0,
  author: '小菜呆呆',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/xcdd2006/gkd-kit',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
