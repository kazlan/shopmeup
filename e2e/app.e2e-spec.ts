import { ShopmeupPage } from './app.po';

describe('shopmeup App', function() {
  let page: ShopmeupPage;

  beforeEach(() => {
    page = new ShopmeupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
