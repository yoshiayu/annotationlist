new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        annotations: [
            {
                name: "@After",
                description: "このアノテーションは、特定のメソッド実行後にアドバイスを適用することを示します。",
                usage: "@Afterは、メソッドの上に配置されます。",
                code: `import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.After;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @After("serviceMethods()")
    public void logAfter() {
        // ログ処理
    }
}`
            },
            {
                name: "@AfterReturning",
                description: "このアノテーションは、特定のメソッドが正常に終了した後にアドバイスを適用することを示します。",
                usage: "@AfterReturningは、メソッドの上に配置されます。",
                code: `import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.AfterReturning;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @AfterReturning(pointcut = "serviceMethods()", returning = "result")
    public void logAfterReturning(Object result) {
        // ログ処理
    }
}`
            },
            {
                name: "@AfterThrowing",
                description: "このアノテーションは、特定のメソッドが例外をスローした後にアドバイスを適用することを示します。",
                usage: "@AfterThrowingは、メソッドの上に配置されます。",
                code: `import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.AfterThrowing;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @AfterThrowing(pointcut = "serviceMethods()", throwing = "error")
    public void logAfterThrowing(Throwable error) {
        // ログ処理
    }
}`
            },
            {
                name: "@AliasFor",
                description: "このアノテーションは、アノテーション属性のエイリアスを作成します。",
                usage: "@AliasForは、アノテーション属性の上に配置されます。",
                code: `public @interface MyAnnotation {
    @AliasFor("name")
    String value() default "";
    
    @AliasFor("value")
    String name() default "";
}`
            },
            {
                name: "@ApiImplicitParam",
                description: "このアノテーションは、API操作のパラメータを記述します（Swagger用）。",
                usage: "@ApiImplicitParamは、メソッドの上に配置されます。",
                code: `import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @ApiOperation(value = "Get item by ID")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "Item ID", required = true, dataType = "int", paramType = "path")
    })
    @GetMapping("/items/{id}")
    public Item getItem(@PathVariable int id) {
        return itemService.findById(id);
    }
}`
            },
            {
                name: "@ApiImplicitParams",
                description: "このアノテーションは、複数の@ApiImplicitParamアノテーションをまとめます（Swagger用）。",
                usage: "@ApiImplicitParamsは、メソッドの上に配置されます。",
                code: `import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @ApiOperation(value = "Get item by ID")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "Item ID", required = true, dataType = "int", paramType = "path"),
            @ApiImplicitParam(name = "name", value = "Item name", required = false, dataType = "string", paramType = "query")
    })
    @GetMapping("/items/{id}")
    public Item getItem(@PathVariable int id, @RequestParam String name) {
        return itemService.findById(id);
    }
}`
            },
            {
                name: "@ApiModel",
                description: "このアノテーションは、モデルの説明を追加します（Swagger用）。",
                usage: "@ApiModelは、クラスの上に配置されます。",
                code: `import io.swagger.annotations.ApiModel;

@ApiModel(description = "Item model")
public class Item {
    private String name;
}`
            },
            {
                name: "@ApiModelProperty",
                description: "このアノテーションは、モデルプロパティの説明を追加します（Swagger用）。",
                usage: "@ApiModelPropertyは、フィールドの上に配置されます。",
                code: `import io.swagger.annotations.ApiModelProperty;

public class Item {
    @ApiModelProperty(notes = "The name of the item")
    private String name;
}`
            },
            {
                name: "@ApiOperation",
                description: "このアノテーションは、API操作の説明を追加します（Swagger用）。",
                usage: "@ApiOperationは、メソッドの上に配置されます。",
                code: `import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @ApiOperation(value = "Get all items")
    @GetMapping("/items")
    public List<Item> getItems() {
        return itemService.findAll();
    }
}`
            },
            {
                name: "@ApiResponse",
                description: "このアノテーションは、APIレスポンスの説明を追加します（Swagger用）。",
                usage: "@ApiResponseは、メソッドの上に配置されます。",
                code: `import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @ApiOperation(value = "Get all items")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource")
    })
    @GetMapping("/items")
    public List<Item> getItems() {
        return itemService.findAll();
    }
}`
            },
            {
                name: "@ApiResponses",
                description: "このアノテーションは、複数の@ApiResponseアノテーションをまとめます（Swagger用）。",
                usage: "@ApiResponsesは、メソッドの上に配置されます。",
                code: `import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @ApiOperation(value = "Get all items")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list"),
            @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
    @GetMapping("/items")
    public List<Item> getItems() {
        return itemService.findAll();
    }
}`
            },
            {
                name: "@Aspect",
                description: "このアノテーションは、クラスがアスペクト（横断的関心事をモジュール化したもの）であることを示します。",
                usage: "@Aspectは、クラスの上に配置されます。",
                code: `import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    // アスペクトの内容
}`
            },
            {
                name: "@Async",
                description: "このアノテーションは、メソッドを非同期で実行することを示します。",
                usage: "@Asyncは、メソッドの上に配置されます。",
                code: `import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @Async
    public void asyncMethod() {
        // 非同期で実行するコード
    }
}`
            },
            {
                name: "@Autowired",
                description: "このアノテーションは、Springの依存性注入を示します。フィールド、コンストラクタ、またはセッターメソッドに使用できます。",
                usage: "@Autowiredは、フィールドやメソッドの上に配置されます。",
                code: `import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {

    @Autowired
    private MyRepository myRepository;

    public void performAction() {
        myRepository.doSomething();
    }
}`
            },
            {
                name: "@Bean",
                description: "このアノテーションは、メソッドレベルで使用し、SpringコンテナにBeanを定義します。",
                usage: "@Beanは、メソッドの上に配置されます。",
                code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfig {
    @Bean
    public MyBean myBean() {
        return new MyBean();
    }
}`
            },
            {
                name: "@BootstrapWith",
                description: "このアノテーションは、Springテストコンテキストのブートストラップをカスタマイズするために使用します。",
                usage: "@BootstrapWithは、クラスの上に配置されます。",
                code: `import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.BootstrapWith;

@BootstrapWith(MyTestContextBootstrapper.class)
public class MyTests {
}`
            },
            {
                name: "@CacheEvict",
                description: "このアノテーションは、キャッシュのエントリを削除することを示します。",
                usage: "@CacheEvictは、メソッドの上に配置されます。",
                code: `import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @CacheEvict(value = "items", allEntries = true)
    public void clearCache() {
        // キャッシュクリア
    }
}`
            },
            {
                name: "@CachePut",
                description: "このアノテーションは、メソッドの実行結果をキャッシュに強制的に書き込むことを示します。",
                usage: "@CachePutは、メソッドの上に配置されます。",
                code: `import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @CachePut(value = "items", key = "#item.id")
    public Item updateItem(Item item) {
        return itemRepository.save(item);
    }
}`
            },
            {
                name: "@Cacheable",
                description: "このアノテーションは、メソッドの戻り値をキャッシュすることを示します。",
                usage: "@Cacheableは、メソッドの上に配置されます。",
                code: `import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @Cacheable("items")
    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }
}`
            },
            {
                name: "@Column",
                description: "Columnは、フィールドがデータベースのカラムにマッピングされることを示します。",
                usage: "Columnは、フィールドの上に配置されます。",
                code: `import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String name;

    // getters and setters
}`
            },
            {
                name: "@Component",
                description: "このアノテーションは、Springコンテナが管理する汎用のBeanを示します。サービスやリポジトリ以外のBeanに対して使用されます。",
                usage: "@Componentは、クラスの上に配置されます。",
                code: `import org.springframework.stereotype.Component;

@Component
public class MyComponent {

    public String getGreeting() {
        return "Hello from MyComponent!";
    }
}`
            },
            {
                name: "@ComponentScan",
                description: "このアノテーションは、指定されたパッケージでコンポーネントのスキャンを行うことを示します。",
                usage: "@ComponentScanは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.example.demo")
public class AppConfig {
}`
            },
            {
                name: "@Configuration",
                description: "このアノテーションは、Springコンテナの設定クラスを示します。Beanの定義を含むクラスに使用します。",
                usage: "@Configurationは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfig {
    @Bean
    public MyBean myBean() {
        return new MyBean();
    }
}`
            },
            {
                name: "@ConfigurationProperties",
                description: "このアノテーションは、プロパティファイルの値をクラスにバインドするために使用します。",
                usage: "@ConfigurationPropertiesは、クラスの上に配置されます。",
                code: `import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "my")
public class MyProperties {
    private String property;
    
    // getterとsetter
}`
            },
            {
                name: "@Conditional",
                description: "このアノテーションは、特定の条件が満たされた場合にのみBeanを登録するために使用します。",
                usage: "@Conditionalは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

@Configuration
@Conditional(MyCondition.class)
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnBean",
                description: "このアノテーションは、特定のBeanが存在する場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnBeanは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    @ConditionalOnBean(name = "someOtherBean")
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnClass",
                description: "このアノテーションは、特定のクラスがクラスパスに存在する場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnClassは、クラスの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnClass(name = "com.example.MyClass")
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnExpression",
                description: "このアノテーションは、SpEL（Spring Expression Language）式が真である場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnExpressionは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;

@Configuration
public class AppConfig {
    @Bean
    @ConditionalOnExpression("\${some.property:true}")
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnJava",
                description: "このアノテーションは、特定のJavaバージョンが存在する場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnJavaは、クラスの上に配置されます。",
                code: `import org.springframework.boot.system.JavaVersion;
import org.springframework.boot.autoconfigure.condition.ConditionalOnJava;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnJava(JavaVersion.NINE)
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnMissingBean",
                description: "このアノテーションは、特定のBeanが存在しない場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnMissingBeanは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    @ConditionalOnMissingBean(MyService.class)
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnMissingClass",
                description: "このアノテーションは、特定のクラスがクラスパスに存在しない場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnMissingClassは、クラスの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnMissingClass("com.example.MissingClass")
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnNotWebApplication",
                description: "このアノテーションは、Webアプリケーションコンテキストが存在しない場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnNotWebApplicationは、クラスの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnNotWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnNotWebApplication
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnProperty",
                description: "このアノテーションは、特定のプロパティが存在する場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnPropertyは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    @ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnResource",
                description: "このアノテーションは、特定のリソースがクラスパスに存在する場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnResourceは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnResource(resources = "classpath:application.properties")
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConditionalOnWebApplication",
                description: "このアノテーションは、Webアプリケーションコンテキストが存在する場合にBeanを条件付きで登録します。",
                usage: "@ConditionalOnWebApplicationは、クラスの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnWebApplication
public class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}`
            },
            {
                name: "@ConstructorBinding",
                description: "このアノテーションは、コンストラクタを使用してプロパティをバインドすることを示します。",
                usage: "@ConstructorBindingは、クラスの上に配置されます。",
                code: `import org.springframework.boot.context.properties.ConstructorBinding;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConstructorBinding
@ConfigurationProperties("my")
public class MyProperties {
    private final String property;

    public MyProperties(String property) {
        this.property = property;
    }

    public String getProperty() {
        return property;
    }
}`
            },
            {
                name: "@Controller",
                description: "このアノテーションは、Spring MVCのコントローラークラスを示します。",
                usage: "@Controllerは、クラスの上に配置されます。",
                code: `import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyController {
    @GetMapping("/home")
    public String home() {
        return "home";
    }
}`
            },
            {
                name: "@ControllerAdvice",
                description: "このアノテーションは、アプリケーション全体のコントローラーに対して、例外処理やモデルデータの操作を提供します。",
                usage: "@ControllerAdviceは、クラスの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class MyControllerAdvice {
}`
            },
            {
                name: "@CrossOrigin",
                description: "このアノテーションは、特定のエンドポイントでCORS（クロスオリジンリソースシェアリング）を有効にします。",
                usage: "@CrossOriginは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://example.com")
public class MyRestController {
    @GetMapping("/api/items")
    public List<Item> getItems() {
        return itemService.findAll();
    }
}`
            },
            {
                name: "@DataJpaTest",
                description: "このアノテーションは、JPAリポジトリのテストを行うために使用します。",
                usage: "@DataJpaTestは、クラスの上に配置されます。",
                code: `import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class MyRepositoryTest {
    @Autowired
    private MyRepository repository;
}`
            },
            {
                name: "@DependsOn",
                description: "このアノテーションは、特定のBeanの初期化後に初期化されるBeanを指定します。",
                usage: "@DependsOnは、クラスの上に配置されます。",
                code: `import org.springframework.stereotype.Service;
import org.springframework.context.annotation.DependsOn;

@Service
@DependsOn("anotherBean")
public class MyService {
}`
            },
            {
                name: "@DirtiesContext",
                description: "このアノテーションは、テスト後にSpringコンテキストをリセットするために使用します。",
                usage: "@DirtiesContextは、クラスの上に配置されます。",
                code: `import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

@DirtiesContext
@SpringBootTest
public class MyTests {
}`
            },
            {
                name: "@Documented",
                description: "このアノテーションは、アノテーションがJavadocに含まれることを示します。",
                usage: "@Documentedは、アノテーションの上に配置されます。",
                code: `import java.lang.annotation.Documented;

@Documented
public @interface MyAnnotation {
}`
            },
            {
                name: "@EnableAsync",
                description: "このアノテーションは、非同期処理を有効にします。",
                usage: "@EnableAsyncは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

@Configuration
@EnableAsync
public class AsyncConfig {
}`
            },
            {
                name: "@EnableAutoConfiguration",
                description: "このアノテーションは、Spring Bootが自動的にBean定義を構成するよう指示します。",
                usage: "@EnableAutoConfigurationは、クラスの上に配置されます。",
                code: `import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`
            },
            {
                name: "@EnableCaching",
                description: "このアノテーションは、キャッシュ機能を有効にします。",
                usage: "@EnableCachingは、クラスの上に配置されます。",
                code: `import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableCaching
public class CachingConfig {
}`
            },
            {
                name: "@EnableConfigurationProperties",
                description: "このアノテーションは、@ConfigurationPropertiesを持つクラスを有効にします。",
                usage: "@EnableConfigurationPropertiesは、クラスの上に配置されます。",
                code: `import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(MyProperties.class)
public class PropertiesConfig {
}`
            },
            {
                name: "@EnableGlobalMethodSecurity",
                description: "このアノテーションは、メソッドレベルのセキュリティを有効にします。",
                usage: "@EnableGlobalMethodSecurityは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {
}`
            },
            {
                name: "@EnableJpaRepositories",
                description: "このアノテーションは、JPAリポジトリのサポートを有効にします。",
                usage: "@EnableJpaRepositoriesは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.example.demo.repository")
public class JpaConfig {
}`
            },
            {
                name: "@EnableScheduling",
                description: "このアノテーションは、スケジューリング機能を有効にします。",
                usage: "@EnableSchedulingは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
public class SchedulingConfig {
}`
            },
            {
                name: "@EnableTransactionManagement",
                description: "このアノテーションは、アノテーションベースのトランザクション管理を有効にします。",
                usage: "@EnableTransactionManagementは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class TransactionConfig {
}`
            },
            {
                name: "@EnableWebMvc",
                description: "このアノテーションは、Spring MVCのサポートを有効にします。",
                usage: "@EnableWebMvcは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
}`
            },
            {
                name: "@EnableWebSecurity",
                description: "このアノテーションは、Spring Securityを有効にします。",
                usage: "@EnableWebSecurityは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}`
            },
            {
                name: "@EventListener",
                description: "このアノテーションは、Springイベントリスナーを示します。",
                usage: "@EventListenerは、メソッドの上に配置されます。",
                code: `import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class MyEventListener {
    @EventListener
    public void handleEvent(MyEvent event) {
        // イベント処理
    }
}`
            },
            {
                name: "@GetMapping",
                description: "このアノテーションは、HTTP GETリクエストを処理するメソッドを示します。",
                usage: "@GetMappingは、メソッドの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @GetMapping("/home")
    public String home() {
        return "home";
    }
}`
            },
            {
                name: "@InitBinder",
                description: "このアノテーションは、特定のコントローラーでバインドや検証の設定をカスタマイズします。",
                usage: "@InitBinderは、メソッドの上に配置されます。",
                code: `import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.Controller;

@Controller
public class MyController {
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // バインダー設定
    }
}`
            },
            {
                name: "@Inherited",
                description: "このアノテーションは、アノテーションがサブクラスに継承されることを示します。",
                usage: "@Inheritedは、アノテーションの上に配置されます。",
                code: `import java.lang.annotation.Inherited;

@Inherited
public @interface MyAnnotation {
}`
            },
            {
                name: "@JsonIgnore",
                description: "このアノテーションは、JSONシリアライズ時に特定のフィールドを無視します。",
                usage: "@JsonIgnoreは、フィールドの上に配置されます。",
                code: `import com.fasterxml.jackson.annotation.JsonIgnore;

public class Item {
    private String name;
    
    @JsonIgnore
    private String secretCode;
}`
            },
            {
                name: "@JsonProperty",
                description: "このアノテーションは、JSONプロパティ名をカスタマイズします。",
                usage: "@JsonPropertyは、フィールドの上に配置されます。",
                code: `import com.fasterxml.jackson.annotation.JsonProperty;

public class Item {
    @JsonProperty("itemName")
    private String name;
}`
            },
            {
                name: "@Lazy",
                description: "このアノテーションは、Beanの遅延初期化を示します。必要になるまでBeanを作成しません。",
                usage: "@Lazyは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
public class LazyService {
}`
            },
            {
                name: "@ModelAttribute",
                description: "このアノテーションは、モデル属性をメソッド引数にバインドし、リクエストスコープに公開します。",
                usage: "@ModelAttributeは、メソッドの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.stereotype.Controller;

@Controller
public class MyController {
    @ModelAttribute("user")
    public User getUser() {
        return new User();
    }
}`
            },
            {
                name: "@PathVariable",
                description: "このアノテーションは、URLのパスから変数を取得します。",
                usage: "@PathVariableは、メソッド引数の上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @GetMapping("/items/{id}")
    public String getItem(@PathVariable("id") String itemId) {
        return "item";
    }
}`
            },
            {
                name: "@Pointcut",
                description: "このアノテーションは、ポイントカット（アスペクトの適用対象を示すもの）を定義します。",
                usage: "@Pointcutは、メソッドの上に配置されます。",
                code: `import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceMethods() {
    }
}`
            },
            {
                name: "@PostAuthorize",
                description: "このアノテーションは、メソッドの実行後に特定の権限を持っているかどうかを確認します。",
                usage: "@PostAuthorizeは、メソッドの上に配置されます。",
                code: `import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @PostAuthorize("returnObject.owner == authentication.name")
    public MyObject getObject() {
        return new MyObject();
    }
}`
            },
            {
                name: "@PostConstruct",
                description: "このアノテーションは、Beanの初期化後に実行するメソッドを示します。",
                usage: "@PostConstructは、メソッドの上に配置されます。",
                code: `import javax.annotation.PostConstruct;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @PostConstruct
    public void init() {
        // 初期化コード
    }
}`
            },
            {
                name: "@PreAuthorize",
                description: "このアノテーションは、メソッドの実行前に特定の権限を持っているかどうかを確認します。",
                usage: "@PreAuthorizeは、メソッドの上に配置されます。",
                code: `import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void secureMethod() {
    }
}`
            },
            {
                name: "@PreDestroy",
                description: "このアノテーションは、Beanの破棄前に実行するメソッドを示します。",
                usage: "@PreDestroyは、メソッドの上に配置されます。",
                code: `import javax.annotation.PreDestroy;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @PreDestroy
    public void destroy() {
        // クリーンアップコード
    }
}`
            },
            {
                name: "@Primary",
                description: "このアノテーションは、複数のBeanの中で優先的に選ばれるBeanを示します。",
                usage: "@Primaryは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class PrimaryService implements MyService {
}`
            },
            {
                name: "@Profile",
                description: "このアノテーションは、特定のSpringプロファイルがアクティブな場合にのみBeanを登録するために使用します。",
                usage: "@Profileは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DevComponent {
    // 開発環境でのみ有効なコンポーネント
}`
            },
            {
                name: "@PropertySource",
                description: "このアノテーションは、プロパティファイルを読み込むために使用します。",
                usage: "@PropertySourceは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
public class AppConfig {
    // 設定クラス
}`
            },
            {
                name: "@PropertySources",
                description: "このアノテーションは、複数のプロパティファイルを読み込むために使用します。",
                usage: "@PropertySourcesは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySources;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySources({
    @PropertySource("classpath:application.properties"),
    @PropertySource("classpath:other.properties")
})
public class AppConfig {
}`
            },
            {
                name: "@Repository",
                description: "このアノテーションは、データアクセス層（DAO）のBeanクラスを示します。データベース操作を行います。",
                usage: "@Repositoryは、クラスの上に配置されます。",
                code: `import org.springframework.stereotype.Repository;

@Repository
public class MyRepository {
    // リポジトリの内容
}`
            },
            {
                name: "@RequestHeader",
                description: "このアノテーションは、HTTPリクエストヘッダーをメソッド引数にバインドします。",
                usage: "@RequestHeaderは、メソッド引数の上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @GetMapping("/headers")
    public String getHeader(@RequestHeader("User-Agent") String userAgent) {
        return "header";
    }
}`
            },
            {
                name: "@RequestMapping",
                description: "このアノテーションは、特定のURLパターンに対するHTTPリクエストをマッピングします。",
                usage: "@RequestMappingは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {
    @RequestMapping("/welcome")
    public String welcome() {
        return "welcome";
    }
}`
            },
            {
                name: "@RequestParam",
                description: "このアノテーションは、HTTPリクエストのパラメータをメソッド引数にバインドします。",
                usage: "@RequestParamは、メソッド引数の上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @GetMapping("/items")
    public List<Item> getItems(@RequestParam("category") String category) {
        return itemService.findByCategory(category);
    }
}`
            },
            {
                name: "@RequestPart",
                description: "このアノテーションは、マルチパートリクエストのパートをメソッド引数にバインドします。",
                usage: "@RequestPartは、メソッド引数の上に配置されます。",
                code: `import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {
    @PostMapping("/upload")
    public String handleFileUpload(@RequestPart("file") MultipartFile file) {
        // ファイル処理
        return "upload";
    }
}`
            },
            {
                name: "@RequestScope",
                description: "このアノテーションは、BeanのスコープをHTTPリクエストに設定します。",
                usage: "@RequestScopeは、クラスの上に配置されます。",
                code: `import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@Component
@RequestScope
public class MyRequestBean {
}`
            },
            {
                name: "@ResponseBody",
                description: "このアノテーションは、メソッドの戻り値をHTTPレスポンスのボディに書き込みます。",
                usage: "@ResponseBodyは、メソッドの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {
    @GetMapping("/items")
    @ResponseBody
    public List<Item> getItems() {
        return itemService.findAll();
    }
}`
            },
            {
                name: "@ResponseStatus",
                description: "このアノテーションは、HTTPレスポンスのステータスコードを設定します。",
                usage: "@ResponseStatusは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
}`
            },
            {
                name: "@RestController",
                description: "このアノテーションは、コントローラーがRESTful Webサービスのエンドポイントを提供することを示します。@Controllerと@ResponseBodyを組み合わせたものです。",
                usage: "@RestControllerは、クラスの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyRestController {
    @GetMapping("/api/items")
    public List<Item> getItems() {
        return itemService.findAll();
    }
}`
            },
            {
                name: "@RestControllerAdvice",
                description: "このアノテーションは、RESTコントローラーの例外を処理するために使用します。",
                usage: "@RestControllerAdviceは、クラスの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}`
            },
            {
                name: "@Retryable",
                description: "このアノテーションは、メソッドが失敗した場合に再試行することを示します。",
                usage: "@Retryableは、メソッドの上に配置されます。",
                code: `import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @Retryable(value = { Exception.class }, maxAttempts = 3)
    public void retryableMethod() {
        // 再試行可能なコード
    }
}`
            },
            {
                name: "@Role",
                description: "このアノテーションは、特定のロール（役割）を持つユーザーのみがメソッドにアクセスできるようにします（Java EEの標準アノテーション）。",
                usage: "@Roleは、メソッドの上に配置されます。",
                code: `import javax.annotation.security.RolesAllowed;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @RolesAllowed("ROLE_USER")
    public void secureMethod() {
    }
}`
            },
            {
                name: "@Scope",
                description: "このアノテーションは、Beanのスコープ（範囲）を指定します。デフォルトはシングルトンです。",
                usage: "@Scopeは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class MyConfig {
    @Bean
    @Scope("prototype")
    public MyBean myBean() {
        return new MyBean();
    }
}`
            },
            {
                name: "@Service",
                description: "このアノテーションは、サービスレイヤーのBeanクラスを示します。ビジネスロジックを実装します。",
                usage: "@Serviceは、クラスの上に配置されます。",
                code: `import org.springframework.stereotype.Service;

@Service
public class MyService {
    // サービスの内容
}`
            },
            {
                name: "@SessionAttribute",
                description: "このアノテーションは、HTTPセッションからモデル属性をバインドします。",
                usage: "@SessionAttributeは、メソッド引数の上に配置されます。",
                code: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.stereotype.Controller;

@Controller
public class MyController {
    @GetMapping("/profile")
    public String getProfile(@SessionAttribute("user") User user) {
        return "profile";
    }
}`
            },
            {
                name: "@SessionAttributes",
                description: "このアノテーションは、特定のモデル属性をHTTPセッションに保存します。",
                usage: "@SessionAttributesは、クラスの上に配置されます。",
                code: `import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.stereotype.Controller;

@Controller
@SessionAttributes("user")
public class MyController {
}`
            },
            {
                name: "@SpringBootApplication",
                description: "このアノテーションは、Spring Bootアプリケーションのエントリポイントを示します。@Configuration、@EnableAutoConfiguration、@ComponentScanを組み合わせたものです。",
                usage: "@SpringBootApplicationは、クラスの上に配置されます。",
                code: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`
            },
            {
                name: "@SpringBootTest",
                description: "このアノテーションは、Spring Bootアプリケーション全体のテストを行うために使用します。",
                usage: "@SpringBootTestは、クラスの上に配置されます。",
                code: `import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;

@SpringBootTest
public class MyApplicationTests {
    @Test
    public void contextLoads() {
    }
}`
            },
            {
                name: "@Target",
                description: "このアノテーションは、アノテーションが適用されるプログラム要素を指定します。",
                usage: "@Targetは、アノテーションの上に配置されます。",
                code: `import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
public @interface MyAnnotation {
}`
            },
            {
                name: "@Transactional",
                description: "このアノテーションは、メソッドやクラスがトランザクションを持つことを示します。データベース操作が全て成功するか、全て失敗するかを保証します。",
                usage: "@Transactionalは、クラスやメソッドの上に配置されます。",
                code: `import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @Transactional
    public void performTransaction() {
        // データベース操作
    }
}`
            },
            {
                name: "@TransactionalEventListener",
                description: "このアノテーションは、トランザクションイベントリスナーを定義します。",
                usage: "@TransactionalEventListenerは、メソッドの上に配置されます。",
                code: `import org.springframework.transaction.event.TransactionalEventListener;
import org.springframework.stereotype.Component;

@Component
public class MyTransactionalEventListener {
    @TransactionalEventListener
    public void handleEvent(MyEvent event) {
        // イベント処理
    }
}`
            },
            {
                name: "@Transient",
                description: "このアノテーションは、フィールドがデータベースに保存されないことを示します。",
                usage: "@Transientは、フィールドの上に配置されます。",
                code: `import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class User {
    @Id
    private Long id;

    @Transient
    private String temporaryData;

    // getters and setters
}`
            },
            {
                name: "@Value",
                description: "このアノテーションは、外部の設定値をフィールドに注入するために使用します。",
                usage: "@Valueは、フィールドの上に配置されます。",
                code: `import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {
    @Value("\${my.property}")
    private String myProperty;
}`
            },
            {
                name: "@WebMvcTest",
                description: "このアノテーションは、Spring MVCコンポーネントのテストを行うために使用します。",
                usage: "@WebMvcTestは、クラスの上に配置されます。",
                code: `import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(MyController.class)
public class MyControllerTest {
    @Autowired
    private MockMvc mockMvc;
}`
            }
        ],
    },
    computed: {
        filteredAnnotations() {
            if (this.searchQuery) {
                return this.annotations.filter(annotation =>
                    annotation.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                return this.annotations;
            }
        }
    },
    methods: {
        searchAnnotations() {
            // 検索ボタンが押されたときに実行されます。
            this.filteredAnnotations;
        }
    }
});
