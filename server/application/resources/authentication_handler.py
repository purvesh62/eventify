from flask_restful import Resource
from flask import request
from application.business_logic.credential import Credential

class RegistrationEndpoint(Resource):

    def post(self):
        data = request.get_json()
        response = Credential().signup(data)
        return response

class LoginEndpoint(Resource):
    def post(self):
        data = request.get_json()
        response = Credential().login(data)
        return response
    
class CheckEmailExist(Resource):
    def post(self):
        data = request.get_json()
        response = Credential().checkEmail(data)
        return response
    
class SetNewPassword(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        response = Credential().setNewPassword(data)
        return response