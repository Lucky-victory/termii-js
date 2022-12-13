

export const ApiPaths={
   smsSend:'sms/send',
   smsBulkSend:'sms/send/bulk',
   smsOtpSend:'sms/otp/send',
   smsOtpGenerate:'sms/otp/generate',
   emailOtpSend:'email/otp/send',
   voiceOtpSend:'sms/otp/send/voice',
   voiceOtpCall:'sms/otp/call',
   otpVerify:'sms/otp/verify',
}

export const defaultOTPOptions={
   pin_attempts:2,
   pin_time_to_live:5,
   pin_length:6,
}
