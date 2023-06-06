echo
echo -e "\033[0;31mDid you remember to compile the .scss to .CSC!!?\033[0m"
echo
read -p "" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo
    zip ext.zip \
    manifest.json \
    icon128.png \
    popup/blur-conversation.js \
    popup/default-hide.js \
    popup/hide-button.js \
    popup/hide-chat-title-too.js \
    popup/popup.css \
    popup/popup.html \
    script/blur-conversations.css \
    script/script.js \
    script/script.css \

fi