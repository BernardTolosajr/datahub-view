'use strict';

import {
  webpackHelper,
} from 'macaca-wd';

const {
  driver,
  BASE_URL,
} = webpackHelper;

describe('test/datahub-view.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2,
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('page render should be ok', () => {
      return driver
        .getUrl(BASE_URL)
        .sleep(1000);
    });
  });
});
