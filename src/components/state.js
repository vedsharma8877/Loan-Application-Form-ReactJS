import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  TextField,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const validationSchema = Yup.object({
  state: Yup.string()
    .required("*Required"),
});
const State = () => {
  const formik = useFormik({
    initialValues: {
      state: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div>
    <Container>
    <FormControl sx={{  minWidth: 200 }}
    margin="normal"
    size="normal">
    <InputLabel>State</InputLabel>
        <Select
          id="state"
          name="state"
          label="State"
          error={formik.touched.state && Boolean(formik.errors.state)}
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <MenuItem value="AL">AL - Alabama</MenuItem>
          <MenuItem value="AK">AK - Alaska</MenuItem>
          <MenuItem value="AS">AS - American Samoa</MenuItem>
          <MenuItem value="AZ">AZ - Arizona</MenuItem>
          <MenuItem value="AR">AR - Arkansas</MenuItem>
          <MenuItem value="CA">CA - California</MenuItem>
          <MenuItem value="CO">CO - Colorado</MenuItem>
          <MenuItem value="CT">CT - Connecticut</MenuItem>
          <MenuItem value="DE">DE - Delaware</MenuItem>
          <MenuItem value="DC">DC - District of Columbia</MenuItem>
          <MenuItem value="FM">FM - Federated States of Micronesia</MenuItem>
          <MenuItem value="FL">FL - Florida</MenuItem>
          <MenuItem value="GA">GA - Georgia</MenuItem>
          <MenuItem value="GU">GU - Guam</MenuItem>
          <MenuItem value="HI">HI - Hawaii</MenuItem>
          <MenuItem value="ID">ID - Idaho</MenuItem>
          <MenuItem value="IL">IL - Illinois</MenuItem>
          <MenuItem value="IN">IN - Indiana</MenuItem>
          <MenuItem value="IA">IA - Iowa</MenuItem>
          <MenuItem value="KS">KS - Kansas</MenuItem>
          <MenuItem value="KY">KY - Kentucky</MenuItem>
          <MenuItem value="LA">LA - Louisiana</MenuItem>
          <MenuItem value="ME">ME - Maine</MenuItem>
          <MenuItem value="MH">MH - Marshall Islands</MenuItem>
          <MenuItem value="MD">MD - Maryland</MenuItem>
          <MenuItem value="MA">MA - Massachusetts</MenuItem>
          <MenuItem value="MI">MI - Michigan</MenuItem>
          <MenuItem value="MN">MN - Minnesota</MenuItem>
          <MenuItem value="MS">MS - Mississippi</MenuItem>
          <MenuItem value="MO">MO - Missouri</MenuItem>
          <MenuItem value="MT">MT - Montana</MenuItem>
          <MenuItem value="NE">NE - Nebraska</MenuItem>
          <MenuItem value="NV">NV - Nevada</MenuItem>
          <MenuItem value="NH">NH - New Hampshire</MenuItem>
          <MenuItem value="NJ">NJ - New Jersey</MenuItem>
          <MenuItem value="NM">NM - New Mexico</MenuItem>
          <MenuItem value="NY">NY - New York</MenuItem>
          <MenuItem value="NC">NC - North Carolina</MenuItem>
          <MenuItem value="ND">ND - North Dakota</MenuItem>
          <MenuItem value="MP">MP - Northern Mariana Islands</MenuItem>
          <MenuItem value="OH">OH - Ohio</MenuItem>
          <MenuItem value="OK">OK - Oklahoma</MenuItem>
          <MenuItem value="OR">OR - Oregon</MenuItem>
          <MenuItem value="PW">PW - Palau</MenuItem>
          <MenuItem value="PA">PA - Pennsylvania</MenuItem>
          <MenuItem value="PR">PR - Puerto Rico</MenuItem>
          <MenuItem value="RI">RI - Rhode Island</MenuItem>
          <MenuItem value="SC">SC - South Carolina</MenuItem>
          <MenuItem value="SD">SD - South Dakota</MenuItem>
          <MenuItem value="TN">TN - Tennessee</MenuItem>
          <MenuItem value="TX">TX - Texas</MenuItem>
          <MenuItem value="UT">UT - Utah</MenuItem>
          <MenuItem value="VT">VT - Vermont</MenuItem>
          <MenuItem value="VI">VI - Virgin Islands</MenuItem>
          <MenuItem value="VA">VA - Virginia</MenuItem>
          <MenuItem value="WA">WA - Washington</MenuItem>
          <MenuItem value="WV">WV - West Virginia</MenuItem>
          <MenuItem value="WI">WI - Wisconsin</MenuItem>
          <MenuItem value="WY">WY - Wyoming</MenuItem>
        </Select>
        <FormHelperText
        id="state"
        error={formik.touched.state && Boolean(formik.errors.state)}
      >
        {formik.errors.state}
      </FormHelperText>
  </FormControl>
  </Container>
    </div>
  );
};
export default State;


// <form>
// <Container>
//   <TextField
//     id="state"
//     name="state"
//     label="State"
//     value={formik.values.state}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     error={formik.touched.state && Boolean(formik.errors.state)}
//     helperText={formik.touched.state && formik.errors.state}
//     size="medium"
//     margin="normal"
//   />
// </Container>
// </form>