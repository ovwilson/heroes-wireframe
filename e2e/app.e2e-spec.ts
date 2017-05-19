import { HeroesWireframePage } from './app.po';

describe('heroes-wireframe App', () => {
  let page: HeroesWireframePage;

  beforeEach(() => {
    page = new HeroesWireframePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
