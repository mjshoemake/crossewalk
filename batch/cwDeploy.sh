stopTomcat.sh
rm -R ~/Home/apps/tomcat8/webapps/ROOT
rm -R ~/Home/apps/tomcat8/webapps/crossewalk
echo Copying to crossewalk.war...
cp -p ~/Home/IdeaProjects/crossewalk/target/crossewalk-1.0.0.war ~/Home/apps/tomcat8/webapps/crossewalk.war
echo File copied.
echo Copying to ROOT.war...
cp -p ~/Home/IdeaProjects/crossewalk/target/crossewalk-1.0.0.war ~/Home/apps/tomcat8/webapps/ROOT.war
echo File copied.
startTomcat.sh
