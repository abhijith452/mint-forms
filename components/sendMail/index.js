import styles from "./Styles.module.css";
import Loader from "../../UI-Components/loader";
import Input from "../../UI-Components/CustomInput/input3";
import TextArea from "../../UI-Components/CustomTextarea";
import { Formik, getIn } from "formik";
import RichEditor from "../../UI-Components/RichEditor";
import * as yup from "yup";

export default function SendMail({ setModal, data, handleSubmit, loading }) {
  const initailData = {
    to:
      data !== [] && data.length > 0
        ? data.map((val) => val.email).toString()
        : "",
    subject: "",
    msg: "",
  };

  let schema = yup.object().shape({
    to: yup.string().required("Required"),
    subject: yup.string().required("Required"),
    msg: yup.string().required("Required"),
  });

  const wrapperStyle = {
    // border: "1px solid #969696",
  };

  const editorStyle = {
    height: "10rem",
    // padding: "1rem",
    fontSize:"14px"
  };

  return (
    <div className={styles.modal}>
      <div
        className={styles.modal_overlay}
        onClick={() => setModal(false)}
      ></div>
      <div className={styles.modal_con}>
        <h4>Send mail</h4>
        {loading ? (
          <Loader />
        ) : (
          <Formik
            initialValues={initailData}
            validationSchema={schema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ values, setFieldValue, handleSubmit, errors }) => (
              <>
                <Input
                  // label="To"
                  value={values.to}
                  disabled={loading}
                  placeholder="Enter the email seperated by commas"
                  error={getIn(errors, "to") !== undefined ? true : false}
                  errMsg={
                    getIn(errors, "to") !== undefined ? getIn(errors, "to") : ""
                  }
                  onChange={(e) => setFieldValue("to", e.target.value)}
                />
                <Input
                  // label="Subject"
                  value={values.subject}
                  disabled={loading}
                  placeholder="Enter the subject"
                  error={getIn(errors, "subject") !== undefined ? true : false}
                  errMsg={
                    getIn(errors, "subject") !== undefined
                      ? getIn(errors, "subject")
                      : ""
                  }
                  onChange={(e) => setFieldValue("subject", e.target.value)}
                />

                <RichEditor
                  // label="Message"
                  wrapperStyle={wrapperStyle}
                  editorStyle={editorStyle}    
                  state={values.msg}
                  placeholder="Enter the message"
                  error={getIn(errors, "msg") !== undefined ? true : false}
                  errMsg={
                    getIn(errors, "msg") !== undefined
                      ? getIn(errors, "msg")
                      : ""
                  }
                  setState={(content) => setFieldValue("msg", content)}
                />
                {/* <TextArea
                  label="Message"
                  value={values.msg}
                  disabled={loading}
                  placeholder="Enter the message"
                  error={getIn(errors, "msg") !== undefined ? true : false}
                  errMsg={getIn(errors, "msg") !== undefined ? getIn(errors, "msg") : ""}
                  onChange={(e) => setFieldValue("msg", e.target.value)} /> */}
                <div className={styles.modal_con_buttons}>
                  <button
                    className={styles.buttons_first}
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    Sent
                  </button>
                  <button
                    className={styles.buttons_first}
                    disabled={loading}
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}
