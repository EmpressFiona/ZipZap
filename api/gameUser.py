import json
import flask

from util import dataUtil

def changeLeader():
    body = flask.request.json
    gameUser = dataUtil.setGameUserValue('leaderId', body['userCardId'])
    response = {
        "resultCode": "success",
        'gameUser': gameUser,
        'user': dataUtil.readJson('data/user/user.json')
    }
    return flask.jsonify(response)

def editComment():
    body = flask.request.json
    gameUser = dataUtil.setGameUserValue('comment', body['comment'])
    response = {
        "resultCode": "success",
        'gameUser': gameUser,
        'user': dataUtil.readJson('data/user/user.json')
    }
    return flask.jsonify(response)

def setBackground():
    body = flask.request.json
    bgItem = dataUtil.getUserObject('userItemList', body['itemId'])

    gameUser = dataUtil.setGameUserValue('bgItemId', body['itemId'])
    if bgItem is not None:
        gameUser = dataUtil.setGameUserValue('bgItem', bgItem['item'])
    
    response = {
        "resultCode": "success",
        'gameUser': gameUser
    }
    return flask.jsonify(response)
    
def handleGameUser(endpoint):
    if endpoint.endswith('changeLeader'):
        return changeLeader()
    elif endpoint.endswith('editComment'):
        return editComment()
    elif endpoint.endswith('setBackground'):
        return setBackground()
    else:
        print('gameUser' + endpoint)
        flask.abort(501, description="Not implemented")