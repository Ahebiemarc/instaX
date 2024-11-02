import mongoose, { Document, Model, Schema } from "mongoose";


// une interface représentant un document Elector
interface IUserDocument extends Document {
    username: string;
    password: string;
    
};

type UserProps = {
    username: string;
    password: string;
    
}

interface IUserModel extends Model<IUserDocument> {
    createUser(userData: UserProps): Promise<IUserDocument>;
    

}

// le schéma correspondant à l'interface IElector
const UserSchema = new Schema<IUserDocument, IUserModel>({
    username: { type: String, required: true,},
    password: { type: String, required: true,}
    
});


UserSchema.statics.createUser = function(user: UserProps){
    return this.create(user);
};




// Créer un modèle Mongoose à partir du schéma ElectorSchema
export const UserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);



