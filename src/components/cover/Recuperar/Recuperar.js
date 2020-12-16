import React from 'react'


 const Recuperar = () => {
//   const { id } = useParams();
//     const [url, setUrl] = useState(`${API_URL}/players/${id}`)
//     const [loading, setLoading] = useState(false)
//     const { setRefresh } = useAuth();
//     const [email, setEmail] = useState([])

//     const handleInputChange = ({target})=>{
//       setEmail({
//         ...email,
//         [target.name]:target.value
//       })
        

// }

//   const RecuperarContrasena = async () => {
//     try {
//         setLoading(true)

//         const token = getToken();
//         if (token === null) {

//             setRefresh(true)
//         }
//         else {
//             const params = {
//                 method: "POST",
//                 headers: {
//                     "Authorization": token,
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(match)
//             };
//             const response = await fetch(`${API_URL}/recuperar-password`, params);

//             if (response.status === 401) {
//                 logout()
//                 toast.warn("Su token ha expirado. Vuelva a iniciar sesión.")
//                 setRefresh(true)
//             }
//             else if (response.status >= 200 && response.status < 300) {
//                 const data = await response.json();
//                 toast.success(data.message)
//             }
//             else {
//                 toast.err("Ha ocurrido un error.")
//             }
//         }
//         setLoading(false)
//     }
//     catch (error) {
//         setLoading(false)
//         toast.error(error.message)
//     }
// }

  return (
    <div
      className="modal fade"
      id="modalRecover"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog container" role="document">
        <div className="modal-content">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-3">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-3 mt-2">
                        Recupera tu contraseña
                      </h1>
                    </div>
                    <form className="user">
                      <div className="form-group row"></div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control"
                          id="exampleInputEmail"
                          placeholder="Correo Electronico" 
                        />
                      </div>
                      <div className="form-group row"></div>
                      <button
                        href="login.html"
                        className="btn btn-primary  btn-block" 
                      >
                        Recuperar Contraseña
                      </button>
                    </form>
                    <hr />

                    <div className="text-center">
                      <a className="small" href="login.html">
                        ¿Ya tienes una cuenta? ¡Iniciar sesión!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperar;
