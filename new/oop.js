const user={
    _email:"S@mit.com",
    _password:"abc",

    set email(value){
        this._email=value
    },
    get _email(){
        return this._email.toUpperCase()
    }
}
console.log(user._email);