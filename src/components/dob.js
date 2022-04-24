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
import moment from 'moment';
import DatePicker from '@mui/lab/DatePicker';

const validationSchema = Yup.object({
      dob: Yup.string()
        .test('Date of Birth', 'Should be greather than 18 and less than 60', function(value) {
          if(moment().diff(moment(value), 'years') >= 18 && moment().diff(moment(value), 'years') < 60){
          return moment().diff(moment(value), 'years') >= 18;
          }
        }),
    });
const DOB = () => {
    const formik = useFormik({
            initialValues: {
              dob: "",
            },
            validationSchema: validationSchema,
          });
    return(
        <div>
        <Container>
        <DatePicker
        renderInput={(props) => (
          <TextField
            style={{width:"67%"}}
            size="normal"
            margin="normal"
            variant="outlined"
            required
            {...props}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
    helperText={formik.touched.dob && formik.errors.dob}
          />
        )}
        name="dob"
        label="DOB"
        value={formik.values.dob}
        maxDate={moment(new Date())}
        minDate={moment(new Date("08.15.1947"))}
        onChange={(newValue) => {
          formik.setFieldTouched("dob");
          formik.setFieldValue(
            "dob",moment(newValue)
          );
        }}
        onKeyPress={() => formik.setFieldTouched("dob")}
      />
        </Container>
        </div>
    );
};
export default DOB;

