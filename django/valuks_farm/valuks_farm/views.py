from django.shortcuts import render
from . import machine_learning_model

def home(request):  # reminder: ‘home’ links to urls.py entry
    return render(request, 'index.html') # pulls index.html from
                                         # templates directory

def contact(request):
    return render(request, 'contact.html')

def result(request):
    user_input = request.GET['user_input']
    # Any python code to process the input can go here
    result = machine_learning_model.multiplier(user_input)
    return render(request, 'result.html', {'num': result})