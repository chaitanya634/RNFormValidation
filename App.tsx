
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

import { useForm, Controller } from "react-hook-form";

function App(): JSX.Element {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: email,
      password: password
    }
  });

  function onSubmit() {
    setEmail("")
    setPassword("")
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }} >

      <Controller
        control={control}
        rules={{
          required: { value: true, message: 'Please enter your email' },
          maxLength: { value: 50, message: 'You have reached maximum limit of characters' },
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderColor: (errors.email?.message === "" || errors.email === undefined) ? '#E7E7E7' : 'red',
            }}
            onChangeText={text => {
              onChange(text)
              setEmail(text)
            }}
            value={email}
            placeholder="enter email"
            keyboardType="numeric"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: { value: true, message: 'Please enter your password' },
          maxLength: { value: 50, message: 'You have reached maximum limit of characters' }
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderColor: (errors.password?.message === "" || errors.password === undefined) ? '#E7E7E7' : 'red',
            }}
            onChangeText={text => {
              onChange(text)
              setPassword(text)
            }}
            value={password}
            placeholder="enter password"
            keyboardType="numeric"
          />
        )}
        name="password"
      />
      {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

      <Button
        title='t'
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
}

export default App;
