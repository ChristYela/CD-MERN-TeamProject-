const mongoose = require('mongoose');
const bcrypt = require('bcrypt') //Importación de bcrypt, encargada de encriptar -> npm install bcrypt

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required."]
    },
    email: {
        type: String,
        required: [true, "E-mail is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Enter a valid e-mail."
        },
        unique: true //Unique no nos va a guardar cuando un email se repite PERO no es un validador
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters"]
    }

}, {timestamps: true, versionKey: false})

//Atributo temporal
UserSchema.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value );


//Se hace ANTES de validar el esquema de usuario
UserSchema.pre('validate', function(next) {
    if(this.password != this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords do not match');
    }

    next();
});

//Antes de guardar el usuario, encriptamos la contraseña
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10) //La cantidad de veces que encryptamos o hasheamos la contraseña
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("usuarios", UserSchema);
module.exports = User;