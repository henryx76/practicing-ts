type DefaultResponse =  {
    id: (string|number), 
    name: string, 
    createdAt: string
}
type ID = (string|number)
type IputDto = {name: string, active: boolean}

interface repository {
    readonly model: any;
    findAll(): DefaultResponse[],
    findById(id: ID ): DefaultResponse
    Insert(data: ): DefaultResponse
    update(id: ID, data: InputDto): DefaultResponse
    destroy(id: ID): boolean
}
interface Searchable{
    searchable(filter: string): DefaultResponse[]
}
interface EventManager {}
    dispatch(payload: object): void[]
}
interface FullRepository extends repository, Searchable, EventManager{

}



//  class UserRepository implements repository, Searchable, EventManager {
class UserRepository implements FullRepository {
    searchable(filter: string): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    model: any;
    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: ID): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    Insert(data: any): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: ID): boolean {
        throw new Error("Method not implemented.");
    }

}

export {}