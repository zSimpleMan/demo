import { FindOptions } from "sequelize"
import { Transaction } from "sequelize/types"
import { ICriteria } from "src/interface/interface"
import { QueryParser } from "./query-parser"

export class BaseService<Entity> {
  public queryParser: QueryParser
  private repository
  constructor (entityRespository) {
    this.repository = entityRespository
    this.queryParser = new QueryParser()
  }

  parserSequelizeOptions (options): FindOptions {
    return this.queryParser.parse(options)
  }

  async find (criterial: ICriteria, transaction?: Transaction): Promise<Entity[]> {
    const newOptions = this.parserSequelizeOptions(criterial)

    const data = await this.repository.findAll(<FindOptions>{
      raw: true,
      nest: true,
      ...newOptions,
      transaction
    })

    return data
  }

  async create (data, transaction?: Transaction): Promise<Entity> {
    const rs = await this.repository.create(data, { transaction })

    return rs
  }
}