import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../src/connections/constants';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: (): Promise<typeof mongoose> => {
      mongoose.connect("mongodb+srv://sairam:saadhviram24@cluster0-qvbcj.mongodb.net/test?retryWrites=true&w=majority")
    }
  }
]
