export const validationUserData=(user)=>{
  let errors={};
    if(user.name.trim()==""){
errors.name="user name is required";
    }
    else if (user.name.length < 3){
        errors.name="user must be at least 3 characters"
    }
    if(user.email.trim()==""){
        errors.email="email name is required";
            }
            else if (user.email.length < 3){
                errors.email="email must be at least 3 characters"
            }
    
  
            if(user.password.trim()==""){
                errors.password="password name is required";
                    }
                    else if (user.password.length <3){
                        errors.password="password must be at least 3 characters"
                    }
            return errors;
}