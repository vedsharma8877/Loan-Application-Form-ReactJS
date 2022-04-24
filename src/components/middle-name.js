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
  mname: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "*Write proper name"),
});
const MiddleName = () => {
  const formik = useFormik({
    initialValues: {
      mname: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
            id="mname"
            name="mname"
            label="Middle Name"
            inputProps={{ maxLength: 50 }}
            value={formik.values.mname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.mname && Boolean(formik.errors.mname)}
            helperText={formik.touched.mname && formik.errors.mname}
          />
        </Container>
      </form>
    </div>
  );
};
export default MiddleName;
