import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";

const validationSchema = Yup.object({
  lname: Yup.string()
    // .matches(/^[a-z]+$/ , '*Please enter valid loan amount')
    .matches(/^[aA-zZ\s]+$/, "*Write proper name")
    .required("*Required"),
});
const LastName = () => {
  const formik = useFormik({
    initialValues: {
      lname: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="lname"
            name="lname"
            label="Last Name"
            inputProps={{ maxLength: 50 }}
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lname && Boolean(formik.errors.lname)}
            helperText={formik.touched.lname && formik.errors.lname}
          />
        </Container>
      </form>
    </div>
  );
};
export default LastName;
