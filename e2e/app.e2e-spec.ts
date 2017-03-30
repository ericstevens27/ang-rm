import { AngRmPage } from './app.po';

describe('ang-rm App', () => {
  let page: AngRmPage;

  beforeEach(() => {
    page = new AngRmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
