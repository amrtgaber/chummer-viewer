import { ChummerViewerPage } from './app.po';

describe('chummer-viewer App', function() {
  let page: ChummerViewerPage;

  beforeEach(() => {
    page = new ChummerViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
