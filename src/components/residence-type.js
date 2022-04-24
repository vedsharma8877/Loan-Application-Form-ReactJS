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
  rt: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "*Write proper residence type")
    .required("Required"),
});
const ResidenceType = () => {
  const formik = useFormik({
    initialValues: {
      rt: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form>
        <Container>
          <TextField
          style={{width:"60%"}}
            id="rt"
            name="rt"
            label="Residence Type"
            value={formik.values.rt}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.rt && Boolean(formik.errors.rt)}
            helperText={formik.touched.rt && formik.errors.rt}
            size="medium"
            margin="normal"
            inputProps={{ maxLength: 50 }}
          />
        </Container>
      </form>
    </div>
  );
};
export default ResidenceType;
