
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

//step 1: install & import
import { useForm, Controller } from "react-hook-form";

function App(): JSX.Element {

  //step 2
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
    }
  });

  const [email, setEmail] = useState("")

  function onSubmit() {
    setEmail("")
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
            placeholder="placeholder"
            keyboardType="numeric"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

      <Button
        title='t'
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
}

export default App;
