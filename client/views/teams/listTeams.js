Template.listTeams.helpers({
  teams: function(){
    return Teams.find().fetch();
  },
  activeTeam: function(currentTeamId){
    var activeTeamId = Meteor.user().activeTeam._id;
    if( activeTeamId == currentTeamId ){
      return true;
    }else{
      return false;
    }
  }
});

Template.listTeams.events({
  'click .switch-team' : function(e){
    e.preventDefault();
    var teamId = $(e.target).closest('.team-name').attr('data-teamId');
    Meteor.call('setActiveTeam', teamId, function(error) {
      if (error)
        return alert(error);
    });
  }
});
