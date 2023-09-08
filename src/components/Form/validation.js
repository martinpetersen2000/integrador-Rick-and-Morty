// const validate = (userData, setErrors, errors) => {
//   const combinedRegex =
//     /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;
//   const passwordRegex = /^(?=.*\d).{6,10}$/;

//   if (!userData.email) {
//     console.log("aca entra");
//     setErrors({ ...errors, email: "Email vacio" });
//   } else {
//     if (combinedRegex.test(userData.email)) {
//       console.log("aca entra 2");

//       setErrors({ ...errors, email: "" });
//     } else {
//       setErrors({ ...errors, email: "Email invalido" });
//     }
//   }

//   if (!userData.email && !userData.password) {
//     console.log("aca entra3");
//     setErrors({ ...errors, password: "password vacio" });
//   }
//   if (passwordRegex.test(userData.password)) {
//     setErrors({ ...errors, password: "" });
//   } else {
//     setErrors({ ...errors, password: "password invalido" });
//   }
// };
// export default validate;

export default function validate(userData) {
  let errors = {};

  const combinedRegex =
    /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;

  if (!userData.email) {
    errors.email = "Enter tour email";
  }
  if (!combinedRegex.test(userData.email)) {
    errors.email = "Invalid email";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be 6 to 10 characters";
  }

  if (!userData.password) {
    errors.password = "Enter a password";
  }

  return errors;
}

// const validate = (userData, setErrors, errors) => {
//   const combinedRegex =
//     /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/; // Corregí el patrón de expresión regular para la dirección de correo electrónico
//   const passwordRegex = /^(?=.*\d).{6,10}$/;

//   // Validación del correo electrónico
//   if (!userData.email) {
//     setErrors({ ...errors, email: "Email vacio" });
//   } else if (combinedRegex.test(userData.email)) {
//     setErrors({ ...errors, email: "" });
//   } else {
//     setErrors({ ...errors, email: "Email invalido" });
//   }

//   // Validación de la contraseña
//   if (!userData.password) {
//     setErrors({ ...errors, password: "Contraseña vacia" });
//   } else if (passwordRegex.test(userData.password)) {
//     setErrors({ ...errors, password: "" });
//   } else {
//     setErrors({ ...errors, password: "Contraseña invalida" });
//   }
// };

// export default validate;
