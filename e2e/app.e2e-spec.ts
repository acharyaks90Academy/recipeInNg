import { RecipesPrjPage } from './app.po';

describe('recipes-prj App', () => {
  let page: RecipesPrjPage;

  beforeEach(() => {
    page = new RecipesPrjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
