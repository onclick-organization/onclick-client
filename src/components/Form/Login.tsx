'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, Input, FormHelperText, Link } from '@mui/material'

import '../../app/style.scss'
import { authFetcher } from '@/utilities/fetcher'

const formFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    validation: { required: true }
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validation: { required: true }
  }
]

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleFormSubmit = async (data: any) => {
    const res = await authFetcher({ body: data, action: 'login' })
    console.log(res)
  }

  return (
    <Box
      component='form'
      method='POST'
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.9,
        width: '60%',
        maxWidth: 500,
        margin: 'auto'
      }}
    >
      <div
        style={{
          display: false ? 'flex' : 'none',
          flexDirection: 'column',
          textAlign: 'center',
          color: 'white',
          gap: '.6rem'
        }}
      >
        <h3>Welcome Back!</h3>
        <p style={{ color: 'GrayText' }}>
          Log in to continue your learning! or{' '}
          <a href='/register' style={{ color: '#031999' }}>
            Sign Up
          </a>
        </p>
      </div>

      {formFields.map(field => (
        <FormControl key={field.name} error={Boolean(errors[field.name])}>
          <Input
            {...register(field.name, field.validation)}
            id={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.label === 'Email' ? 'Email or username' : 'Password'}
          />
          {errors[field.name] && <FormHelperText>{String(errors[field.name]?.message)}</FormHelperText>}
        </FormControl>
      ))}
      <div style={{ display: 'flex' }}>
        <Input
          {...register('isRememberMe')}
          type='checkbox'
          id='isRememberMe'
          name='isRememberMe'
          // style={{ display: "inline" }}
        />{' '}
        <p style={{ marginLeft: '5px' }}>Remember me?</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: false ? '0 auto' : '0',
          width: false ? '80%' : '100%'
        }}
      >
        <Button type='submit' variant='contained' style={{ width: '40%', background: '#031999' }}>
          Login
        </Button>
        <Button variant='contained' style={{ width: '40%', background: '#031999' }}>
          Cancel
        </Button>
      </div>
      <Box mt={2}>
        <Link href='/forgetpassword' style={{ color: '#031999' }}>
          Forgot Password?
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm
