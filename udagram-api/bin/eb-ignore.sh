if [ -e .ebignore ]; then
    rm .ebignore
fi

touch .ebignore

for i in $(ls -a)
do
    if [[ $i == 'dist' || $i == 'package.json' || $i == '.npmrc' ]]; then
        continue
    else
        echo $i >> .ebignore
    fi
done