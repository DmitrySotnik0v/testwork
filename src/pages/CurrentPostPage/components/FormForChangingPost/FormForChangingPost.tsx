import { ChangeEvent, useState } from "react";
import { Button, Form, Input } from "antd";

import { useAppDispatch, useAppSelector } from "store";

import { changePostTitle } from "store/redusers/postsReducer/postsReducer";
import { S_currentPost } from "store/redusers/postsReducer/selectors/postSelector";

import style from "./FormForChangingPost.module.css";

type FieldType = {
  title?: string;
};

const FormForChangingPost = () => {
  const currentPost = useAppSelector(S_currentPost);

  const [form] = Form.useForm()

  const [disabledBtn, setDisabledBtn] = useState(true);

  const dispatch = useAppDispatch();

  const onFinish = (values: FieldType) => {
    if (currentPost) {
      const requestBody = { ...currentPost, title: values.title! };
      //В идеале на сервере должны обновляться данные, но так как их нет сделал просто имитацию изменения заголовка
      dispatch(
        changePostTitle({
          id: currentPost.id.toString(),
          changedPost: requestBody,
        })
      );
      form.resetFields()
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setDisabledBtn(false);
    }
    else setDisabledBtn(true);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      className={style.form}
      onFinish={onFinish}
    >
      <Form.Item noStyle name="title">
        <Input placeholder="Введите новое название поста" onChange={onChange} />
      </Form.Item>
      <Button type="primary" htmlType="submit" disabled={disabledBtn}>
        Отправить
      </Button>
    </Form>
  );
};

export default FormForChangingPost;
