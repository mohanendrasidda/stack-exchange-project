import {login} from '@/services/auth'

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_ROLE = 'role';

const auth= {
    state:{
      token: /*localStorage.getItem(KEY_TOKEN) ||*/'',
      email: /*localStorage.getItem(KEY_EMAIL) ||*/ '',
      role:  /*localStorage.getItem(KEY_ROLE) || */''
    },

    getters:{
        isAuthenticated(state){
            return !!state.token;
        },
        isAdmin(state){
            return state.role === 'admin'
        }
    },

    mutations:{
        setToken(state, token){
            state.token= token
        },
        setEmail(state, email){
            state.email= email
        },
        setRole(state, role){
            state.role= role
        }
    },

    actions:{
        login( { commit }, credentials ) {
            console.log(credentials)
            return login( credentials )
                        .then( data => {
                            // in meeting app the token may be in token, not authToken
                            const { token, email, role } = data
        
                            localStorage.setItem( KEY_TOKEN, token );
                            localStorage.setItem( KEY_EMAIL, email );
                            localStorage.setItem( KEY_ROLE, role );
        
                            commit( 'setToken', token );
                            commit( 'setEmail', email );
                            commit( 'setRole', role );
        
                            return email;
                        });
        },
    }

}

export default auth