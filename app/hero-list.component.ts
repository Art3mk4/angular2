@Component({
    selector: 'hero-list',
    templateUrl: 'app/hero-list.component.html',
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroListComponent implements OnInit{
    constructor(private _service: HeroService) {}

    heroes: Hero[];
    selectedHero: Hero;

    ngOnInit() {
        this.heroes = this._service.getHeroes();
    }

    selectHero(hero: Hero) { this.selectedHero = hero;}
}