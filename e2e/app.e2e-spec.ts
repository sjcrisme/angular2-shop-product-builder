import { A2rshopPage } from './app.po';

describe('a2rshop App', function() {
  let page: A2rshopPage;

  beforeEach(() => {
    page = new A2rshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
