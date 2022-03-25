import{InMemoryDbService} from "angular-in-memory-web-api";
import{Category} from "./pages/categories/shared/category.model"

export class inMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories:Category[]= [
            { id:1, name:"Moradia", description:'Pagamento de contas da Casa'},
            { id:2, name:"Saúde", description:'Plano de saúde e Remédios'},
            { id:3, name:"Lazer", description:'Cinema, parques, praias, etc'},
            { id:4, name:"Salário", description:'Recebimento de Saláio'},
            { id:5, name:"Feelas", description:'Trabalho como freelancer'},
           
        ];
        return {categories}
    }

}


// createDB:método que retorna um objeto com os itens a serem simulados na requisição