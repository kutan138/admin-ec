import { useAuth } from "@/hooks/useAuth";
import { useRouterState, useNavigate } from "@tanstack/react-router";
import { Alert, Button, Card, Form, Input, Typography } from "antd";
import { useState } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useRouterState({ select: (state) => state.location });
  const [error, setError] = useState<string | null>(null);

  const redirectTo =
    (location.search as Record<string, string> | undefined)?.redirect ?? "/";

  const handleSubmit = async (values: LoginFormValues) => {
    setError(null);
    try {
      await login(values);
      navigate({ to: redirectTo, replace: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message =
        err?.body?.message || err?.message || "Đăng nhập không thành công.";
      setError(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card
        style={{ width: 420 }}
        title={<Typography.Title level={3}>Đăng nhập</Typography.Title>}
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ email: "", password: "" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="you@example.com" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </Form.Item>

          {error ? (
            <Alert type="error" showIcon className="mb-3" message={error} />
          ) : null}

          <Button block type="primary" htmlType="submit" loading={isLoading}>
            Đăng nhập
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
