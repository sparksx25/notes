# FUNDAMENTALS

## Circular dependency
1. 当两个类相互依赖时，就会发生循环依赖关系
2. 当两个模块相互依赖时，就会发生循环依赖关系

- 相互依赖的两个类都使用 forwardRef（提前声明）
```ts
@Injectable()
export class CommonService {
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}
}
```

- 相互依赖的两个模块也可以使用 forwardRef（提前声明）

- [nestjs: Circular dependency](https://docs.nestjs.com/fundamentals/circular-dependency)