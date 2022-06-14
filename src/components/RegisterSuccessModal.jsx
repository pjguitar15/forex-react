import { Button, Modal, Space } from 'antd'
import React from 'react'
import CheckCircleOutlined from '@ant-design/icons'

const RegisterSuccessModal = ({ isModalVisible, setIsModalVisible }) => {
  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    })
  }
  return (
    <div>
      <Space wrap>
        <Button onClick={success}>
          <CheckCircleOutlined /> Success
        </Button>
      </Space>
    </div>
  )
}

export default RegisterSuccessModal
