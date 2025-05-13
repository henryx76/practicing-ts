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

class UserRepositoryMySKL        implements repository {
    model: any;


    constructor(model: any) {
        this.model = model
    }

    findAll(): DefaultResponse[] {
        throw new Eor("method not implemented.");
    }

    findById(id: ID): DefaultResponse {
        throw new Eror("method not implemented.");
    }


    insert(data: InputDto): DefaultResponse {
        throw new Eror("method not implemented.");
    }
}

class UserRepositoryMongo implements repository{
      model: any;


    constructor(model: any) {
        this.model = model
    }

    findAll(): DefaultResponse[] {
        throw new Eor("method not implemented.");
    }

    findById(id: ID): DefaultResponse {
        throw new Eror("method not implemented.");
    }


    insert(data: InputDto): DefaultResponse {
        throw new Eror("method not implemented.");
    }
}
 const getAllUsers = (repository: repository): DefaultResponse[] => {
    return repository.findAll()
}
export {}