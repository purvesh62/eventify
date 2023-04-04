from application.resources.payment_handler import AddPayment
from application.resources.authentication import Authentication
from application.resources.attendee_handler import AttendeeEndpoint
from application.resources.attendee_handler import EditAttendeeEndpoint
from application.resources.registerEvent_handler import DeleteRegisteredEvents
from application.resources.subscriber_handler import SubscriberEndpoint, SubscriberCheckEndpoint
from application.resources.event_handler import EventEndpoint, EventsEndpoint, DeleteEventEndpoint
from application.resources.registerEvent_handler import AddRegisterEvents, GetRegisterEvents, GetRegisterUsers
from application.resources.authentication_handler import RegistrationEndpoint, LoginEndpoint, CheckEmailExist, \
    SetNewPassword
from application.resources.organizer_handler import OrganizerEndPoint, OrganizersEndpoint, \
    UnauthenticateOrganizerEndPoint, EditOrganizerEndpoint


def initialize_routes(api):
    api.add_resource(EventsEndpoint, '/events')
    api.add_resource(EventEndpoint, '/event/<id>', '/event')
    api.add_resource(DeleteEventEndpoint, '/deleteEventAdmin/<id>')
    api.add_resource(Authentication, '/auth')
    api.add_resource(RegistrationEndpoint, '/registration')
    api.add_resource(LoginEndpoint, '/login')
    api.add_resource(OrganizersEndpoint, '/organizers')
    api.add_resource(OrganizerEndPoint, '/organizer', '/organizer/<id>', '/authenticate/<id>')
    api.add_resource(UnauthenticateOrganizerEndPoint, '/unauthOrganizers')
    api.add_resource(AddRegisterEvents, '/registerEvent', '/registerEvent/<id>/<eventID>', '/getRegisterEvent/<id>')
    api.add_resource(GetRegisterEvents, '/getUserRegisterEvents/<id>')
    api.add_resource(GetRegisterUsers, '/getEventRegisterUsers/<id>')
    api.add_resource(AddPayment, '/addPayment', '/getPayments/<id>', '/deletePayment/<id>')
    api.add_resource(DeleteRegisteredEvents, '/deleteEvent/<id>')
    api.add_resource(SubscriberEndpoint, '/subscribe')
    api.add_resource(SubscriberCheckEndpoint, '/checksubscription')
    api.add_resource(CheckEmailExist, '/checkEmail')
    api.add_resource(SetNewPassword, '/setNewPassword')
    api.add_resource(EditOrganizerEndpoint, '/editOrganizer')
    api.add_resource(EditAttendeeEndpoint, '/editAttendee')
    api.add_resource(AttendeeEndpoint, '/attendee/<id>')
