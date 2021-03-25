import "dayjs/locale/pl";
import {
  Form,
  ConfigProvider
} from "antd";

import DayjsDatePicker from '../components/DayjsDatePicker'
import dayjs from 'dayjs';
import plPL from "antd/lib/locale/pl_PL";

dayjs.locale("pl");

const FormItem = Form.Item;

export default function Home() {
  return (

    <div style={{ marginTop: 100 }}>
      <ConfigProvider locale={plPL}>
      <Form layout="horizontal">
        <FormItem
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          >
          <DayjsDatePicker name="startDate" />
        </FormItem>
        <FormItem
          label="DatePicker with inline locale"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          >
          <DayjsDatePicker name="startDate" locale={plPL.DatePicker}/>
        </FormItem>
      
      </Form>
          </ConfigProvider>
    </div>
  );
}
