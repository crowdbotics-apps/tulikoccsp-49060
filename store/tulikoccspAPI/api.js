import axios from "axios";
const tulikoccspAPI = axios.create({
  baseURL: "https://tulikoccsp-49060.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return tulikoccspAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_appinfo_list(payload) {
  return tulikoccspAPI.get(`/api/v1/appinfo/`);
}

function api_v1_appinfo_create(payload) {
  return tulikoccspAPI.post(`/api/v1/appinfo/`, payload);
}

function api_v1_appinfo_retrieve(payload) {
  return tulikoccspAPI.get(`/api/v1/appinfo/${payload.id}/`);
}

function api_v1_appinfo_update(payload) {
  return tulikoccspAPI.put(`/api/v1/appinfo/${payload.id}/`, payload);
}

function api_v1_appinfo_partial_update(payload) {
  return tulikoccspAPI.patch(`/api/v1/appinfo/${payload.id}/`, payload);
}

function api_v1_appinfo_destroy(payload) {
  return tulikoccspAPI.delete(`/api/v1/appinfo/${payload.id}/`);
}

function api_v1_login_create(payload) {
  return tulikoccspAPI.post(`/api/v1/login/`, payload);
}

function api_v1_signup_create(payload) {
  return tulikoccspAPI.post(`/api/v1/signup/`, payload);
}

function rest_auth_login_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_resend_email_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/registration/resend-email/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return tulikoccspAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return tulikoccspAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return tulikoccspAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return tulikoccspAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_appinfo_list,
  api_v1_appinfo_create,
  api_v1_appinfo_retrieve,
  api_v1_appinfo_update,
  api_v1_appinfo_partial_update,
  api_v1_appinfo_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};